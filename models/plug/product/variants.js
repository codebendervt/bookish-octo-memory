const variants = [{
    name:"name",
    type:"text",
    label:"Name"
},{
    name:"cost",
    type:"number",
    label:"Additional Cosr"
}]



export default {
    data: [
        {
            name:"variant",
            label:"Variant Name",
            type:"text",
        },  {
            name:"variants",
            label:"Add Variants",
            type:"list",
            data: variants
        },
   
    ]
}


