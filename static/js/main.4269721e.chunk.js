(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var l=o(0),n=o.n(l),a=o(8),r=o.n(a),c=(o(16),o(17),o(6)),s=o(9),d=o(1),i=o(2),u=o(4),m=o(3),f=o(5),p=function(e){var t=e.todo,o=e.toggleTodo,l=e.destroyTodo;return n.a.createElement("li",null,n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,checked:t.completed,onChange:function(){return o(t.id)}}),n.a.createElement("label",{htmlFor:t.id},t.title),n.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return l(t.id)}})))},g=function(e){function t(){var e,o;Object(d.a)(this,t);for(var l=arguments.length,n=new Array(l),a=0;a<l;a++)n[a]=arguments[a];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",id:0,completed:!1},o.saveCurrentTodoValue=function(e){var t=e.target.value;o.setState({title:t})},o.createTodo=function(e){e.preventDefault(),o.props.addTodo(Object(c.a)({},o.state,{id:100*Math.random()})),o.setState({title:""})},o}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,o=e.toggleTodo,l=e.toggleAll,a=e.toggleAllIsActive,r=e.destroyTodo;return n.a.createElement("form",{onSubmit:this.createTodo},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.title,onChange:this.saveCurrentTodoValue})),n.a.createElement("section",{className:"main",style:{display:"block"}},n.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:a,onChange:function(){return l(a)}}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement("ul",{className:"todo-list"},t.map(function(e){return n.a.createElement(p,{key:e.id,todo:e,toggleTodo:o,destroyTodo:r})}))))}}]),t}(n.a.Component),h=function(e){function t(){var e,o;Object(d.a)(this,t);for(var l=arguments.length,n=new Array(l),a=0;a<l;a++)n[a]=arguments[a];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={},o}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedFilter,o=e.todos,l=e.todosFilter,a=e.clearCompleted;return n.a.createElement("footer",{className:"footer",style:{display:"block"}},n.a.createElement("span",{className:"todo-count"},o.filter(function(e){return!1===e.completed}).length,"items left"),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{href:"#/",className:"All"===t?"selected":"",onClick:function(){return l("All")}},"All")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/active",onClick:function(){return l("Active")},className:"Active"===t?"selected":""},"Active")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/completed",onClick:function(){return l("Completed")},className:"Completed"===t?"selected":""},"Completed"))),n.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:a},"Clear completed"))}}]),t}(n.a.Component),v=function(e){function t(){var e,o;Object(d.a)(this,t);for(var l=arguments.length,n=new Array(l),a=0;a<l;a++)n[a]=arguments[a];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[],filteredTodos:[],selectedFilter:"All",toggleAllIsActive:!1},o.addTodo=function(e){o.setState(function(t){return{todos:[].concat(Object(s.a)(t.todos),[e])}})},o.toggleTodo=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id!==e?t:Object(c.a)({},t,{completed:!t.completed})}),filteredTodos:o.todosFilter(t.selectedFilter)}}),o.setState(function(e){return{toggleAllIsActive:e.todos.every(function(e){return!0===e.completed})&&!0}})},o.toggleAll=function(e){!0!==e?o.setState(function(e){return{todos:e.todos.map(function(e){return Object(c.a)({},e,{completed:!0})}),toggleAllIsActive:!0,filteredTodos:o.todosFilter(e.selectedFilter)}}):o.setState(function(e){return{todos:e.todos.map(function(e){return Object(c.a)({},e,{completed:!1})}),toggleAllIsActive:!1,filteredTodos:o.todosFilter(e.selectedFilter)}})},o.todosFilter=function(e){o.setState(function(t){switch(e){case"Active":return{filteredTodos:t.todos.filter(function(e){return!1===e.completed}),selectedFilter:"Active"};case"Completed":return{filteredTodos:t.todos.filter(function(e){return!0===e.completed}),selectedFilter:"Completed"};case"All":return{filteredTodos:t.todos,selectedFilter:"All"};default:return{}}})},o.destroyTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e}),filteredTodos:o.todosFilter(t.selectedFilter)}})},o.clearCompleted=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!1===e.completed})}})},o}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,o=e.selectedFilter,l=e.toggleAllIsActive,a=e.filteredTodos,r="All"===o?t:a;return n.a.createElement("section",{className:"todoapp"},n.a.createElement(g,{todos:r,addTodo:this.addTodo,toggleTodo:this.toggleTodo,toggleAll:this.toggleAll,toggleAllIsActive:l,destroyTodo:this.destroyTodo}),n.a.createElement(h,{todos:t,todosFilter:this.todosFilter,selectedFilter:o,clearCompleted:this.clearCompleted}))}}]),t}(n.a.Component);r.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4269721e.chunk.js.map