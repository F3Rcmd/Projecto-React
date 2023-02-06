let ListaProd = [
{ id: '0', nombre: "Producto 1", precio: 1000, categ: 'A', foto: "../pngs/placeholder.png", Desc: "Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis temporibus in eius reprehenderit natus commodi iure labore itaque architecto nulla accusantium, eum esse sunt dolor neque repellat possimus suscipit!", },

{ id: '1', nombre: "Producto 2", precio: 2000, categ: 'B', foto: "../pngs/placeholder.png", Desc: "Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis temporibus in eius reprehenderit natus commodi iure labore itaque architecto nulla accusantium, eum esse sunt dolor neque repellat possimus suscipit!", },

{ id: '2', nombre: "Producto 3", precio: 3000, categ: 'C', foto: "../pngs/placeholder.png", Desc: "Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis temporibus in eius reprehenderit natus commodi iure labore itaque architecto nulla accusantium, eum esse sunt dolor neque repellat possimus suscipit!", }
];

export const gFetch = () =>{
    return new Promise((res, rej) => {
		setTimeout(()=> { res( ListaProd ) }, 1000);
	})
}

