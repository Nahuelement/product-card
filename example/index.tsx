import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductImage, ProductTitle, ProductBottons} from '../.';

const product  = {
  id:'1',
  title:'Coffee Card',
 // img : './coffee-mug.png'// 
  

}
const App = () => {
  return (
    <div>
      <ProductCard
                product = {product}
                initialValue = {{
                     count:0,
                    maxCount:10
                }}>
                {
                    ({reset,increaseBy,isMaxCountReached,count}) =>(
                        <>
                        < ProductImage/>
                        < ProductTitle />
                        < ProductBottons />
                        {/* <button onClick={reset}>Reset</button> */}
                       </>
                       )
                }    
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
