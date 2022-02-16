import React from 'react'
import  renderer  from 'react-test-renderer'
import { ProductTitle } from '../../src/components';
import { product1 } from '../data/product';
import { ProductCard } from '../../src/components/ProductCard';



describe('ProductTitle', () => {


     test('Mostrar correctamente el titulo', () => { 
         const wrapper = renderer.create(
             <ProductTitle title='Custom Title' />
         )
         expect(wrapper.toJSON() ).toMatchSnapshot();
      
     }) 
     test('debe de mostrar el componente con el nombre del producto', () => { 

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ()=>(
                    <ProductTitle title='Custom Title'/> 
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON() ).toMatchSnapshot();

      })
    })