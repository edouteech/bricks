import { types } from 'react-bricks/frontend'


import HeroUnit from './custom/MyHeroUnit'
import Conversation from './custom/Conversation'
import SocialIcons from './custom/SocialIcons'
import InputIcons from './custom/InputIcons'
import reactBricksUITheme from './react-bricks-ui'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, Conversation, SocialIcons, InputIcons], // Custom Bricks
      },
    ],
  },
]

export default bricks
