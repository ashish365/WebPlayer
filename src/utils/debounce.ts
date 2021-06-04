function debounce(func: Function, delay = 240){
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func(...args) }, delay);
    };
}

export default debounce;

/**
 * The following commented code is just for my reference.
 */

// function debounce<Params extends any[]>( func: (...args: Params) => any, timeout: number ): (...args: Params) => void 
// {
//     let timer: NodeJS.Timeout;
//     return (...args: Params) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         func(...args);
//       }, timeout);
//     }
// }

// class Test {
//   t: number;
//   constructor(tval: number) {
//       this.t = tval;
//   }

//   logger() {
//       console.log("THIS", this);
//   }
// }

// function debounce(func: Function, context: any, delay = 240): Function {
//   let timer: any;
//   return (...args: any): void => {
//   //   clearTimeout(timer);
//     timer = setTimeout(() => {
//       return func.apply(context, args);
//   }, delay);
//   };
// }



// Current Production Codebase's Debounced Function

// export function useDebounced<T>(value: T, delay: number): T {
//   const [debouncedValue, setDebouncedValue] = useState<T>(value);
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }