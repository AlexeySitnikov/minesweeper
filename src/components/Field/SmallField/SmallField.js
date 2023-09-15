import { VerticalLine } from './VerticalLine'
import style from './style.module.css'

export function SmallField({
  field, setField, exploded, setExploded, firstButtonPressed, setFirstButtonPressed,
}) {
  return (
    <div className={`${style.field}`}>
      {field.map((el, index) => (
        <VerticalLine
          line={el}
          column={index}
          field={field}
          setField={setField}
          exploded={exploded}
          setExploded={setExploded}
          firstButtonPressed={firstButtonPressed}
          setFirstButtonPressed={setFirstButtonPressed}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  )
}
