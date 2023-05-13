import { types } from 'react-bricks';
import { IconType } from 'react-icons';

//=============================
// Local Types
//=============================
interface SocialIconsProps {
  name: 'google' | 'facebook' | 'apple';
  size?: number;
  color?: string;
  onClick?: () => void;
}

//=============================
// Component to be rendered
//=============================
const SocialIcons: types.Brick<SocialIconsProps> = ({ name, size = 24, color, onClick }) => {
  let Icon: IconType;

  switch (name) {
    case 'google':
      Icon = require('react-icons/fa').FaGoogle;
      break;
    case 'facebook':
      Icon = require('react-icons/fa').FaFacebook;
      break;
    case 'apple':
      Icon = require('react-icons/fa').FaApple;
      break;
    default:
      throw new Error(`Unsupported social icon: ${name}`);
  }

  return (
    <div
      className="w-10 h-10 flex justify-center items-center text-center rounded-full p-3"
      style={{ backgroundColor: '#ecf2f7', color: color || '#000' }}
      onClick={onClick}
    >
      <Icon size={size} />
    </div>
  );
};

//=============================
// Brick Schema
//=============================
SocialIcons.schema = {
  name: 'social-icons',
  label: 'Social Icons',
  getDefaultProps: () => ({
    name: 'google',
    size: 24,
    color: '#000',
    onClick: null,
  }),
  sideEditProps: [
    {
      name: 'name',
      label: 'Icon Name',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'google', label: 'Google' },
          { value: 'facebook', label: 'Facebook' },
          { value: 'apple', label: 'Apple' },
        ],
      },
    },
    {
      name: 'size',
      label: 'Icon Size',
      type: types.SideEditPropType.Number,
    },
    {
      name: 'color',
      label: 'Icon Color',
      type: types.SideEditPropType.Text,
    },
  ],
};

export default SocialIcons;
