import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='bg-green-50 p-4 flex justify-center mb-6'>
        <div>
            <img src={logo} className='w-32'/>
        </div>
    </div>
  )
}

export default Header