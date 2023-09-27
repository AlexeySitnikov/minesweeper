import smileFace from '../constrains/smileFace.jpg'
import deadFace from '../constrains/deadFace.jpg'
import coolFace from '../constrains/coolFace.jpg'
import searchFace from '../constrains/searchFace.jpg'

export function getFace(face) {
  switch (face) {
    case 'smileFace':
      return (smileFace)

    case 'deadFace':
      return (deadFace)

    case 'coolFace':
      return (coolFace)

    case 'searchFace':
      return (searchFace)

    default:
      return (smileFace)
  }
}
