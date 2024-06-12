document.addEventListener('DOMContentLoaded', () => { 
    const products = document.querySelectorAll('.rgb-effect');

    products.forEach(product => { 
        product.addEventListener('mouseenter', () => { 
            product.classList.add('active'); 
        }); 

            product.addEventListener('mouseleave', () => { 
                product.classList.remove('active'); 
            }); 
        }); 
    });

    const audio= document.getElementById('background-music');
    audio.volume= 0.5;

    audio.onplay().catch(error=>{
        console.log("La reproduccion automatica esta bloqueada por el navegador");
    });
});