<script setup lang="ts">
import { computed, reactive, ref, onMounted, onUnmounted, watch } from "vue";
import sugar from "sugar";
import { IArticle, Articles } from "../../core/api/articles";
import {
    IHeadMetaAttr,
    setTitle,
    setHeadMeta,
    removeHeadMeta,
} from "../../core/head";
import { RoutePaths } from "../../core/router";
import { SiteMetadata } from "../../tools/constants";
import { States } from "../../tools/stated";
import { Utils } from "../../tools/utils";
import { useRoute } from "vue-router";

import Loader from "../../components/Loader.vue";
import Message from "../../components/Message.vue";

const hTitle = ref("Loading...");
const hMeta = reactive<IHeadMetaAttr[]>([]);
const pMeta: IHeadMetaAttr[] = [];

const route = useRoute();

const state = ref(States.processing);
const article = ref<IArticle | null>(null);
const isUnknownArticle = computed(
    () => state.value === States.failed && hTitle.value === "404"
);

const fetchArticle = async () => {
    hTitle.value = "Loading...";

    const slug =
        typeof route.params.slug === "string"
            ? route.params.slug
            : Array.isArray(route.params.slug) && route.params.slug.length === 1
            ? route.params.slug[0]
            : null;

    if (!slug) {
        state.value = States.failed;
        hTitle.value = "404";
        return;
    }

    try {
        article.value = await Articles.getArticleFromSlug(slug);

        hTitle.value = article.value.meta.title;
        const nHeadAttrs: IHeadMetaAttr[] = [
            {
                name: "title",
                content: article.value.meta.title,
            },
            {
                name: "og:title",
                content: article.value.meta.title,
            },
            {
                name: "description",
                content: article.value.meta.description,
            },
            {
                name: "og:description",
                content: article.value.meta.description,
            },
            {
                name: "og:type",
                content: "article",
            },
            {
                name: "keywords",
                content: article.value.meta.tags.join(", "),
            },
        ];

        nHeadAttrs.forEach((x) => {
            const element = document.querySelector<HTMLMetaElement>(
                `meta[name="${x.name}"]`
            );

            if (element?.content) {
                pMeta.push({
                    name: x.name,
                    content: element.content,
                });
            }
        });
        hMeta.push(...nHeadAttrs);

        state.value = States.done;
    } catch (_) {
        state.value = States.failed;
        hTitle.value = "500";
    }
};

interface ITocElement {
    id: string;
    title: string;
}

const toc = reactive<ITocElement[]>([]);

const renderedContent = computed(() => {
    toc.splice(0, Infinity);

    if (!article.value) return "";

    const element = document.createElement("div");
    element.id = `ac-${Utils.random(8).join("")}`;
    element.innerHTML = Utils.getSafeHtml(article.value?.content);

    for (const x of Array.from(
        element.querySelectorAll(":is(h1, h2, h3, h4, h5, h6)")
    )) {
        const cTitle = x.textContent!;
        const cId = `h-${Utils.getHtmlSafeId(cTitle)}`;

        x.id = cId;
        x.setAttribute("onclick", `window.toggleActiveHeading(this.id);`);
        toc.push({
            id: cId,
            title: cTitle,
        });
    }

    onContentLoaded(element.id);
    return element.outerHTML;
});

const currentActiveHeading = ref<string | null>(null);

const toggleActiveHeading = (
    id: string,
    source: "internal" | "external" = "internal"
) => {
    const dataActiveKey = "data-active";

    if (currentActiveHeading.value) {
        const previous = document.getElementById(currentActiveHeading.value);
        previous?.removeAttribute(dataActiveKey);

        if (source === "internal" && currentActiveHeading.value === id) {
            currentActiveHeading.value = null;
            return;
        }
    }

    const current = document.getElementById(id);
    if (current) {
        history.replaceState(undefined, "", `#${id}`);
        current.setAttribute(dataActiveKey, "");
        current.scrollIntoView({ behavior: "smooth" });
        currentActiveHeading.value = id;
    }
};

(window as any).toggleActiveHeading = toggleActiveHeading;

const onContentLoaded = (contentElementId: string) => {
    const watcher = setInterval(() => {
        const element = document.getElementById(contentElementId);
        if (element) {
            toggleActiveHeading(location.hash.slice(1));
            clearInterval(watcher);
        }
    }, 100);
};

const stopTitleWatcher = watch([hTitle, hMeta], () => {
    setTitle(
        SiteMetadata.getTitle(`${hTitle.value} ${SiteMetadata.infix} Article`)
    );
    setHeadMeta(hMeta);
});

const currentVisibleHeading = ref<string | null>(null);

const onScrollListener = () => {
    const scrollingElement = document.scrollingElement;
    if (scrollingElement) {
        for (const x of toc) {
            const heading = document.getElementById(x.id)!;
            if (scrollingElement.scrollTop < heading.offsetTop) {
                break;
            }
            currentVisibleHeading.value = heading.id;
        }
    }
};

onMounted(() => {
    fetchArticle();
    document.addEventListener("scroll", onScrollListener);
});

onUnmounted(() => {
    stopTitleWatcher();
    delete (window as any).toggleActiveHeading;
    document.removeEventListener("scroll", onScrollListener);
    removeHeadMeta(hMeta);
    setHeadMeta(pMeta);
});
</script>

<template>
    <div>
        <hr />

        <div class="u-container u-container-h">
            <div
                class="u-flex py-10 min-h-[50vh]"
                v-if="state !== States.done || !article"
            >
                <Loader v-if="state === States.processing" />
                <div v-else>
                    <Message v-if="isUnknownArticle">
                        <template v-slot:header>
                            <p>404</p>
                        </template>

                        <template v-slot:body>
                            <p>
                                I know you could read, but this isn't the place
                                for it.
                            </p>
                        </template>

                        <template v-slot:footer>
                            <router-link
                                class="text-primary-500 hover:text-secondary-500"
                                :to="RoutePaths.articles"
                                >👉 Go to articles</router-link
                            >
                        </template>
                    </Message>
                    <Message v-else>
                        <template v-slot:header>
                            <p>500</p>
                        </template>

                        <template v-slot:body>
                            <p>Unfortunately, couldn't fetch the article.</p>
                        </template>

                        <template v-slot:footer>
                            <button
                                class="text-primary-500 hover:text-secondary-500"
                                @click="fetchArticle"
                            >
                                🔄 Retry
                            </button>
                        </template>
                    </Message>
                </div>
            </div>
            <article v-else>
                <div class="mb-3">
                    <p class="text-3xl font-bold mb-1">
                        {{ article.meta.title }}
                    </p>
                    <p class="mb-1">
                        {{ article.meta.description }}
                    </p>

                    <p class="text-sm mb-1 text-secondary-400 mb-1">
                        {{ article.meta.tags.map((x) => `#${x}`).join(" ") }}
                    </p>
                    <p class="text-xs">
                        <span class="text-primary-500">
                            {{
                                sugar.Date.relative(
                                    new Date(article.meta.publishedAt)
                                )
                            }}
                        </span>
                        <span class="text-secondary-400">
                            / {{ article.meta.readingTime }} mins. read</span
                        >
                    </p>
                </div>

                <hr />

                <div class="lg:grid lg:grid-cols-4 lg:gap-12">
                    <aside class="mt-8 lg:col-span-1">
                        <div class="lg:sticky lg:top-6">
                            <p class="text-lg font-bold mb-2">
                                Table of contents
                            </p>
                            <ul class="lg:max-h-[85vh] lg:overflow-y-auto">
                                <li
                                    v-for="x in toc"
                                    :key="x.id"
                                    :class="[
                                        'cursor-pointer pl-4 py-1 hover:bg-secondary-900 border-l-2 border-secondary-700',
                                        currentVisibleHeading === x.id &&
                                            'lg:bg-primary-500/10 lg:border-primary-500 lg:text-primary-500',
                                    ]"
                                    @click="
                                        toggleActiveHeading(x.id, 'external')
                                    "
                                >
                                    {{ x.title }}
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <div
                        class="u-stylify lg:row-start-1 lg:col-start-1 lg:col-span-3"
                        id="content"
                        v-html="renderedContent"
                    ></div>
                </div>
            </article>
        </div>
    </div>
</template>
