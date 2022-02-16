
import  renderer  from 'react-test-renderer'

import { product1} from '../data/product';
import { ProductCard } from '../../src/components/ProductCard';
import React from 'react'




const {act} = renderer

describe('ProductCard', () => {


test('Mostrar correctamente el componente ProductCard ', () => { 
        const wrapper = renderer.create(
            <ProductCard product= {product1}>
                {
                    ()=>(
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON() ).toMatchSnapshot();
     
    }) 
    test('debe de incrementar el contador  ', () => { 
        const increment = 2
        const wrapper = renderer.create(
            <ProductCard product= {product1}>
                {
                    ({count,increaseBy})=>(
                        <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={()=>increaseBy(increment)}>sumar +2</button>
                        </>
                    )
                }
            </ProductCard>
        )
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(()=>{
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe(increment.toString())
     })
   
   })