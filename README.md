# nahuel-product-card

este es un paquete de prueba de despligue npm

### Nahuel Perugi
```
import {ProductCard, ProductImage, ProductTitle, ProductBottons} from 'nahuel-product-card'
```
```
<ProductCard
                product = {product}
                initialValue = {{
                     count:0,
                    maxCount:10
                }}>
                {
                    ({reset,increaseBy,isMaxCountReached,count}) =>(
                        <div  >
                   
                        < ProductImage/>
                        < ProductTitle />
                        < ProductBottons />
                        {/* <button onClick={reset}>Reset</button> */}
                        
                       </div>
                       )
                }    
 </ProductCard>
```

