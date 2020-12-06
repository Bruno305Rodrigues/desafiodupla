
const ListaCarros = [

    
    {
        id: 1,
        marca: "VolksWagen",
        modelo: "Gol City (Trend)/Titan 1.0 T. Flex 8V 4p",
        ano: 2010,
        combustivel: "Gasolina",
        imagem: '../css/img/gol2012.jpg',
    },
    { 
        id: 2,
        marca: "VolksWagen",
        modelo: "AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die",
        ano: 2012,
        combustivel: "Diesel",
        imagem: "https://www.google.com/search?q=AMAROK+CD2.0+16V/S+CD2.0+16V+TDI+4x2+Die&tbm=isch&ved=2ahUKEwiRvIL__63tAhUGCbkGHYvNCvoQ2-cCegQIABAA&oq=AMAROK+CD2.0+16V/S+CD2.0+16V+TDI+4x2+Die&gs_lcp=CgNpbWcQAzoECCMQJzoCCAA6BggAEAUQHjoHCCMQ6gIQJ1CDhQNYzZoDYPadA2gBcAB4BIAB8wGIAeENkgEGMC4xMS4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=QtrGX5GTHIaS5OUPi5ur0A8&bih=625&biw=1366#imgrc=Z78aTOJ6CESWzM",
    },
    {
        id: 3,
        marca: "VolksWagen",
        modelo: "Golf 2.0/ 2.0 Mi Flex Aut/Tiptronic",
        ano: 2014,
        combustivel: "Gasolina",
        imagem: "https://www.google.com/search?q=Golf+2.0/+2.0+Mi+Flex+Aut/Tiptronic.&tbm=isch&ved=2ahUKEwj8p7eZgK7tAhWyMLkGHVO8B9IQ2-cCegQIABAA&oq=Golf+2.0/+2.0+Mi+Flex+Aut/Tiptronic.&gs_lcp=CgNpbWcQAzIECAAQHjIGCAAQBRAeMgYIABAFEB46BwgjEOoCECdQvoEGWJ-GBmC0jgZoAXAAeACAAY8BiAGPAZIBAzAuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=edrGX7yHNLLh5OUP0_iekA0&bih=625&biw=1366#imgrc=w7yTZ_Fx9xNXuM",
    },
    {
        id: 4,
        marca: "Fiat",
        modelo: "Palio 1.0 ECONOMY Fire Flex 8V 2p",
        ano: 2011,
        combustivel: "Gasolina",
        imagem: "https://www.google.com/search?q=Palio+1.0+ECONOMY+Fire+Flex+8V+2p&tbm=isch&ved=2ahUKEwiX6bfKgK7tAhUTBbkGHUDNA9oQ2-cCegQIABAA&oq=Palio+1.0+ECONOMY+Fire+Flex+8V+2p&gs_lcp=CgNpbWcQAzICCAAyAggAMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjoHCCMQ6gIQJ1DBqApYya0KYKOwCmgBcAB4AIABfYgBfZIBAzAuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=4NrGX5f5JZOK5OUPwJqP0A0&bih=625&biw=1366#imgrc=mQIVwD1q04BjKM",
    },
    {
        id: 5,
        marca: "Fiat",
        modelo: "Grand Siena ESSENCE 1.6 Flex 16V",
        ano: 2015,
        combustivel: "Gasolina",
        imagem: "https://www.google.com/search?q=Grand+Siena+ESSENCE+1.6+Flex+16V&tbm=isch&ved=2ahUKEwji4dScga7tAhXZDLkGHSOWDsgQ2-cCegQIABAA&oq=Grand+Siena+ESSENCE+1.6+Flex+16V&gs_lcp=CgNpbWcQAzICCAAyBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQCBAeMgYIABAIEB46BwgjEOoCECdQ3dELWNPXC2Cn4gtoAXAAeACAAY4BiAGOAZIBAzAuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=jdvGX6LnA9mZ5OUPo6y6wAw&bih=625&biw=1366#imgrc=BrYPco7ItgowBM",
    },
    {
        id: 6,
        marca: "Fiat",
        modelo: "Toro Freedom 2.0 16V 4x4 Diesel Aut",
        ano: 2019,
        combustivel: "Diesel",
        imagem: "https://www.google.com/search?q=Toro+Freedom+2.0+16V+4x4+Diesel+Aut.&tbm=isch&ved=2ahUKEwjW3pPAgq7tAhUqBLkGHeceD4AQ2-cCegQIABAA&oq=Toro+Freedom+2.0+16V+4x4+Diesel+Aut.&gs_lcp=CgNpbWcQAzIECAAQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjoHCCMQ6gIQJ1DAhwVYjIwFYKySBWgBcAB4AIABiwGIAYsBkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=49zGX5bhOKqI5OUP5728gAg&bih=625&biw=1366#imgrc=jzYsZTvXocY4QM",
    },
    {
        id: 7,
        marca: "Chevrolet",
        modelo: "Celta Life/ LS 1.0 MPFI 8V FlexPower 5p",
        ano: 2012,
        combustivel: "Gasolina",
        imagem: "https://www.google.com/search?q=Celta+Life/+LS+1.0+MPFI+8V+FlexPower+5p&tbm=isch&ved=2ahUKEwiH8sXpgq7tAhVOBrkGHdPsDtcQ2-cCegQIABAA&oq=Celta+Life/+LS+1.0+MPFI+8V+FlexPower+5p&gs_lcp=CgNpbWcQAzoHCCMQ6gIQJ1D5sAlYorUJYJ-4CWgBcAB4AIABgwGIAYMBkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=Ot3GX4ftLM6M5OUP09m7uA0&bih=625&biw=1366#imgrc=0GWCUCsQ2cuh7M",
    },
    {
        id: 8,
        marca: "Chevrolet",
        modelo: "Astra Elegance 2.0 MPFI FlexPower 8V 5p",
        ano: 2009,
        combustivel: "Gasolina",
        imagem: "https://www.google.com/search?q=Astra+Elegance+2.0+MPFI+FlexPower+8V+5p&tbm=isch&ved=2ahUKEwiLvtu0g67tAhVONLkGHUAyCMYQ2-cCegQIABAA&oq=Astra+Elegance+2.0+MPFI+FlexPower+8V+5p&gs_lcp=CgNpbWcQAzICCAAyBggAEAUQHjIGCAAQBRAeMgYIABAFEB46BwgjEOoCECdQhdMaWOPXGmCg4BpoAXAAeACAAXyIAXySAQMwLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=2N3GX4vyFs7o5OUPwOSgsAw&bih=625&biw=1366#imgrc=KVPb9ND4s6mQ9M",
    },
    {
        id: 9,
        marca: "Chevrolet",
        modelo: "COBALT LS 1.4 8V FlexPower 4p",
        ano: 2015,
        combustivel: "Gasolina",
        imagem: "https://www.google.com/search?q=COBALT+LS+1.4+8V+FlexPower+4p&tbm=isch&ved=2ahUKEwiM6cyHha7tAhV1L7kGHVYjBVgQ2-cCegQIABAA&oq=COBALT+LS+1.4+8V+FlexPower+4p&gs_lcp=CgNpbWcQAzoHCCMQ6gIQJ1C6_gdY_4IIYIuGCGgBcAB4AIABowGIAaMBkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=kt_GX4zYJvXe5OUP1saUwAU&bih=625&biw=1366#imgrc=efMaQvOUoLIxlM",
    },
    {
        id: 10,
        marca: "Chevrolet",
        modelo: "Corsa Sed Class.Life 1.0/1.0 FlexPower",
        ano: 2005,
        combustivel: "Alcool",
        imagem: "https://www.google.com/search?q=Corsa+Sed+Class.Life+1.0/1.0+FlexPower&tbm=isch&ved=2ahUKEwjw3-rHha7tAhX7MLkGHVH7CSwQ2-cCegQIABAA&oq=Corsa+Sed+Class.Life+1.0/1.0+FlexPower&gs_lcp=CgNpbWcQAzICCAAyBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMggIABAFEAoQHjoHCCMQ6gIQJ1DVnAtYsqALYKSjC2gBcAB4AIABgAGIAYABkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=GeDGX7DvFPvh5OUP0fan4AI&bih=625&biw=1366#imgrc=GdTijKhdqdP71M",
    },

];

export { ListaCarros };