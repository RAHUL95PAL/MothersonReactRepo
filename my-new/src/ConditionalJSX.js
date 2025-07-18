export default function PackList()
{
    return(
<section>
    <h1>Sally Ride's Packing List</h1>
    <ul>
        <Item isPacked={true}
        name="space suit"
        />

 <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />

    </ul>
</section>

    );
}

function Item({name,isPacked})
{
    if (isPacked) {
  return (<li>{name} ✅</li>
  );
}
return <li className="item">{name}</li>;
}