import { getArticles } from '@/actions/server/article';
import React from 'react';
import CategoryDropDown from './CategoryDropDown';

const CategorySelector = async() => {

    const articles=await getArticles();
    const categories=[...new Set(articles.map(article=>article.category))];

    return <CategoryDropDown categories={categories}></CategoryDropDown>
};

export default CategorySelector;