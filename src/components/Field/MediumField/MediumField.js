import { VerticalLine } from './VerticalLine'
import style from './style.module.css'

export function MediumField({ field, ...props }) {
  return (
    <div className={`${style.field}`}>
      {field.map((el, index) => (
        <VerticalLine
          line={el}
          column={index}
          field={field}
          {...props}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  )
}
