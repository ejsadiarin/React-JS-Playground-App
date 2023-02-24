export default function Quotes() {
  fetch('https://excuser-three.vercel.app/v1/excuse/')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

    return (
      <>
        <button>Get Quote</button>
      </>
    )
}