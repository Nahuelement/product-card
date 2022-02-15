import {  useContext} from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

export interface PropsButton {
    className?:string,
    style?:React.CSSProperties,
    product?:any,
    quantity?:number
}

export const ProductBottons = ({className,style,product,quantity}:PropsButton) =>{

    
    const {counter, increaseBy,isMaxCountReached } = useContext(ProductContext)
   console.log(product,quantity)

    // const dispatch = useDispatch()
    

    // const isMaxCount = useCallback(() => {
    //    if(counter===maxCount) return true
    //    else return false
    //  }, [counter,maxCount]);
     
    
    
   return(
       <div 
       className = {`${styles.buttonsContainer} ${className}`}
       style = {style}

       >
       <button 
       className ={  styles.buttonMinus}
     
       
       onClick= {() =>{
        // dispatch({type:'put',payload:product})
        increaseBy(-1)}
       } 
       >
           -
       </button>
       <div 
       className ={styles.countLabel}>
           {counter}
       </div>
       
       <button 
       className ={ ` ${ styles.buttonAdd } ${isMaxCountReached && styles.disabled}  ` }
        disabled = {isMaxCountReached}
       onClick= {() => {
        //    dispatch({type:'add',payload:product})
           increaseBy(+1)}}
       >
           +
       </button>

   </div>
   )
}