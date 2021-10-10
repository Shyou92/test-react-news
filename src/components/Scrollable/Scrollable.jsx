import React, { useEffect, useRef } from "react";

function Scrollable(props) {
  let ref = useRef();

  useEffect(() => {
    const el = ref.current;

    if(el) {
      const onWheel = e => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY + 28,
          behavior: "instant",
        })
      }

      el.addEventListener('wheel', onWheel);

      return () => el.removeEventListener('wheel', onWheel);;
    }
  }, []);

  return (
    <section ref={ref} className={props.class}>
      {props.children}
    </section>
  )
}

export default Scrollable;