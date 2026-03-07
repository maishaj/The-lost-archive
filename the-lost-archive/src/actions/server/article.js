"use server"
import { collections, dbconnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

const formatDocument=(doc)=>{
    if(!doc)
        return null;
    return {...doc, _id:doc._id.toString()};
}

export const getArticles=async(query,category)=>{

    let filter={};

    if(query) 
    {
        filter.$or=[
            {title: {$regex:query, $options:'i'}},
            {accessionNumber: {$regex:query, $options:'i'}}]
    };

    if(category){
        filter.category=category;
    }

    const articles=await dbconnect(collections.ARTICLES).find(filter).toArray();
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

export const newsletter=async(payload)=>{
    const newEmail={
        ...payload,
    }

    const result=await dbconnect(collections.NEWSLETTER).insertOne(newEmail);
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

export const postMessages=async(payload)=>{

   const newMsg={
      ...payload
   }
   const result=await dbconnect(collections.MESSAGES).insertOne(newMsg);
   return result.acknowledged;
}