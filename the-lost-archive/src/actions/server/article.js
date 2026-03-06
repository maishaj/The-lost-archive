"use server"
import { collections, dbconnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

const formatDocument=(doc)=>{
    if(!doc)
        return null;
    return {...doc, _id:doc._id.toString()};
}

export const getArticles=async()=>{
    const articles=await dbconnect(collections.ARTICLES).find().toArray();
    return articles.map(formatDocument)
}

export const getSingleArticle=async(id)=>{

    if(id.length!=24){
        return {};
    }

    const query={_id: new ObjectId(id)};
    const article=await dbconnect(collections.ARTICLES).findOne(query);
    return formatDocument(article);
}

export const postArticles=async(payload)=>{

    const newArticle={
        ...payload,
        datePublished:new Date(),
        isTrending: payload.isTrending === 'true',
    }

    const result=await dbconnect(collections.ARTICLES).insertOne(newArticle);
    return result.acknowledged;
}

export const getMyArticles=async(email)=>{
    if(!email){
        return [];
    }
    const articles=await dbconnect(collections.ARTICLES).find({userEmail:email}).sort({datePublished:-1}).toArray();
    return articles.map(article=>formatDocument(article));
}

export const deleteArticles=async(id)=>{
   const result=await dbconnect(collections.ARTICLES).deleteOne({_id:new ObjectId(id)});
   return result.deletedCount;
}