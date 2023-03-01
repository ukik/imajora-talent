import { boot } from 'quasar/wrappers'
import { scroll, date, Notify, Platform, Screen, Cookies } from 'quasar'

export default boot( async ({ app, ssrContext, router, store }) => {

  app.directive("thumb-resize", {
    inserted(el, binding, vnode) {
      if(Screen.width <= 425) {
        el.style.height = "80px";
      }

      console.log(Screen.width)
    },
    update(el, binding, vnode) {
      if(Screen.width <= 425) {
        el.style.height = "80px";
      }

      console.log(Screen.width)
    }
  });



  // app.directive('lazy-src',{
  //   inserted(el, { value }) {
  //     el.src = value

  //     /* Maybe we need to wait for nextTick, but trry without it first:
  //     Vue.nextTick(() => {
  //       el.src = value
  //     })  */
  //   }
  // })

  // app.directive("pointer", {
  //   inserted(el, binding, vnode) {
  //     // ////console.log(binding.value)
  //     ////console.log(el.children)
  //     el.style.cursor = "pointer";
  //   },
  //   update(el, binding, vnode) {
  //     // ////console.log(binding.value)
  //     el.style.cursor = "pointer";
  //   }
  // });

  // app.directive("input-pointer", {
  //   inserted(el, binding, vnode) {
  //     // ////console.log(binding.value)
  //     // ////console.log(el.childNodes[0])
  //     el.childNodes[0].style.cursor = "pointer";
  //   },
  //   update(el, binding, vnode) {
  //     // ////console.log(binding.value)
  //     el.childNodes[0].style.cursor = "pointer";
  //   }
  // });

  // app.directive('hover', {
  //   bind: function (el, binding, vNode) {
  //     // Provided expression must evaluate to an object.
  //     const compName = vNode.context.name
  //     if (typeof binding.value !== 'object') {
  //       let warn = `[v-hover]: provided expression '${binding.expression}' is not an object, but it needs to be.`
  //       if (compName) { warn += `\nFound in component '${compName}'` }
  //     }
  //     if (!binding.value.over && !binding.value.leave) {
  //       let warn = `[v-hover]: object provided does not have 'over' or 'leave' properties. Needs at least one to be of use`
  //       if (compName) { warn += `\nFound in component '${compName}'` }
  //     }
  //     el.__vHoverOver__ = binding.value.over || (() => {})
  //     el.__vHoverLeave__ = binding.value.leave || (() => {})

  //     // Add Event Listeners
  //     el.addEventListener('mouseover', el.__vHoverOver__)
  //     el.addEventListener('mouseleave', el.__vHoverLeave__)
  //   },
  //   unbind: function (el, binding) {
  //     // Remove Event Listeners
  //     el.removeEventListener('mouseover', el.__vHoverOver__)
  //     el.removeEventListener('mouseleave', el.__vHoverLeave__)
  //     delete el.__vHoverOver__
  //     delete el.__vHoverLeave__
  //   }
  // })
})

