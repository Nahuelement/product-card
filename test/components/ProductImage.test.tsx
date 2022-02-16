import  renderer  from 'react-test-renderer'
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/product';
import { ProductCard } from '../../src/components/ProductCard';
import React from 'react'




describe('ProductImage', () => { 
    
    test('Probando visicualizacion de imagen  ', () => { 
        const wrapper = renderer.create(
            <ProductImage img='https://i.blogs.es/6f44dd/google-2015-1/450_1000.jpg'/>
        )
    
        expect(wrapper.toJSON()).toMatchSnapshot()
    }) 
    test('Probando componente al interiro de productCard pero sin imagen', () => {

        const wrapper = renderer.create(

            <ProductCard product = {product2} >
                {
                    ()=>(
                    <ProductImage />
                    )
                }
            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
         })
        })