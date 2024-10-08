import { watch } from "vue"

export function debounce(func:Function,wait:number,immediate:boolean,...args:Array<any>){
    let timer:number
    return function(){
      if (timer) clearTimeout(timer)
      if (immediate) {
        func(...args)
        timer = setTimeout(() => {
        },wait)
      } else {
        timer = setTimeout(() => {
          func(...args)
        }, wait)
      }
    }
  }

export function throttle(func:Function,wait:number,immediate:boolean,...args:Array<any>){
    let timer:number | null
    return function(){
      if (immediate) {
        if (!timer) {
          func(...args)
          timer = setTimeout(() => {
            timer = null
          }, wait)
        }
      } else {
        if (!timer) {
          timer = setTimeout(() => {
            func(...args)
            timer = null
          }, wait)
        }
      }
    }
  }
