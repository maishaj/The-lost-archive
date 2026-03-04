import { collections, dbconnect } from "@/lib/dbConnect"

const formatDocument=(doc)=>{
    if(!doc)
        return null;
    return {...doc, _id:doc._id.toString()};
}

export const getArticles=async()=>{
    const articles=await dbconnect(collections.ARTICLES).find().toArray();
    return articles.map(formatDocument)
}