import {Schema,model} from 'mongoose'

export interface Products{
    id:string;
    name:string;
    price:number;
    tags:string[];
    favorite:boolean;
    stars:number;
    imageUrl:string;
    origins:string[];
    deliveryTime:string;
}

export const ProductsSchema = new Schema<Products>(
    {
        name: {type:String, required:true},
        price: {type:Number, required:true},
        tags: {type:[String], required:true},
        favorite: {type:Boolean, default:false},
        stars: {type:Number, required:true},
        imageUrl: {type:String, required:true},
        origins: {type:[String], required:true},
        deliveryTime: {type:String, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const ProductsModel = model<Products>('products',ProductsSchema);
