import Mock from 'mockjs'
import { LoginUsers, Users } from './data/user';
let _Users = Users;
function getUrlParam(url){
  var params = {};
  var search = url;
  // search = /\?/.test(search) && search.split("?")[1];
  var searchs = /\&/.test(search) ? search.split("&") : [search];
  for(var i = 0 ; i < searchs.length ; i++){
      if(/\=/.test(searchs[i])){
          var item = searchs[i].split("=");
          params[item[0]] = item[1];
      };
  };
  return params;
};
const getListpage = function (params){
    
    let {page, name} = getUrlParam(params.body);
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return {
        total: total,
        users: mockUsers
      };
};


const data = Mock.mock('/user/listpage', 'get', getListpage);

export default {data};