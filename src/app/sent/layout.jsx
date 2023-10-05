import TopSearch from "../componets/TopSearch";
import TopOptions from "../componets/TopOptions";

export default function layout({children}) {
  return (
    <div>
      <nav className='py-3 flex justify-between items-center bg-slate-100'>
        <TopSearch text ="sent"/>
        <TopOptions />
      </nav>
      {children}
    </div>
  )
}
