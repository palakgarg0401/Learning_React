//it is component which is reuseable and can be nested in any other component
function Profile() {
  return (
    <>
      <img src="https://th.bing.com/th/id/OIP.xPpkoN1ysstXiFgPtMc7PwHaHi?w=169&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="doraemon" />
    </>
  )
}

//export deafult is a standard js syntax that tells that it is the main function of the file
export default function Gallery() {
  return (
    <section>
      <h1>Doraemon</h1>
      {/* Gallery is a parent component, rendering each Profile as a “child” */}
      <Profile /> {/* React component always start with the capital letter */}
      <Profile />
      <Profile />
    </section>
  )
}