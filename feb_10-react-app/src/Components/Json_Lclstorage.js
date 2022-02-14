// import { genData } from '../Data/generated';
import GroupData from '../Data/Group';
// import { product } from '../Data/MOCK_DATA';


const Json_Lclstorage = () =>
  // localStorage.setItem("userData", JSON.stringify(genData));
  // localStorage.setItem("productData", JSON.stringify(product));
  localStorage.setItem("groupData",JSON.stringify(GroupData) )

export default Json_Lclstorage;
