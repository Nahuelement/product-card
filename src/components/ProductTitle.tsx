import { useContext } from "react"
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import React from 'react'

export interface ProductTitlePros { 

    title?:string,
    className?:string,
    style?:React.CSSProperties

}

export const ProductTitle = ({title,className,style}:ProductTitlePros) =>{
    const {product} = useContext(ProductContext)

        return(
            <span className = {`${styles.productDescription} ${className}`}
            style = {style}
            >
                {title? title :product.title}
            </span>
        )
    }