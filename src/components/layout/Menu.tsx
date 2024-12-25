import { NAV } from "@constants";

function Menu() {
  return (
    <div className="border-solid  flex rounded-2xl border-2 border-blue-500 z-10 absolute w-4/5 ml-auto top-10 left-40">
      {NAV.map((ele: string) => {
        return (
          <div className="w-1/6 p-3 border-r border-solid last:border-0 border-blue-500">
            <p className="text-center">{ele}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
