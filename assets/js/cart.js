const Cart = (() => { const KEY='vertice-store-cart', SHIPPING=10; let items=[];
 const load=()=>{try {items=JSON.parse(localStorage.getItem(KEY))||[]}catch{items=[]}}; const save=()=>localStorage.setItem(KEY,JSON.stringify(items));
 const add=(id)=>{const line=items.find(x=>x.id===id);line?line.quantity++:items.push({id,quantity:1});save()};
 const update=(id,quantity)=>{if(quantity<1) return remove(id);const line=items.find(x=>x.id===id);if(line){line.quantity=quantity;save()}};
 const remove=id=>{items=items.filter(x=>x.id!==id);save()}; const details=()=>items.map(line=>({...products.find(p=>p.id===line.id),quantity:line.quantity})).filter(x=>x.id);
 const count=()=>items.reduce((n,x)=>n+x.quantity,0); const subtotal=()=>details().reduce((sum,x)=>sum+x.price*x.quantity,0); return {load,add,update,remove,details,count,subtotal,SHIPPING}; })();
