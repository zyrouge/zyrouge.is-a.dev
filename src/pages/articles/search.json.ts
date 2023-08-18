import type { APIContext } from "astro";
import { Articles } from "~/core/articles";
import { Routes } from "~/core/routes";
import { baseUrl } from "~/core/urls";

export const get = async (_: APIContext) => {
    const articles = await Articles.fetchAll();
    const data = articles.map(({ slug, data: meta }) => [
        meta.title,
        meta.description,
        baseUrl + Routes.articles.constructRead(slug),
    ]);
    return {
        body: JSON.stringify(data),
    };
};
