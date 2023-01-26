// element-ui
import {
  Button,
  Form,
  Input,
  FormItem,
  Menu,
  MenuItem,
  Radio,
  MessageBox,
  Message,
  Table,
  TableColumn,
  Option,
  Select,
  Col,
  Submenu,
  MenuItemGroup,
  Dialog,
  Pagination,
} from 'element-ui';

import Vue from 'vue';

// element-ui
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Radio);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Option);
Vue.use(Select);
Vue.use(Col);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Dialog);
Vue.use(Pagination);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;
