import { types } from 'react-bricks';
import { IconType } from 'react-icons';

//=============================
// Local Types
//=============================
interface InputIconsProps extends types.Brick {
  icon: string;
  inputType: string;
  value?: string;
}

//=============================
// Component to be rendered
//=============================
const InputIcons: types.Brick<InputIconsProps> = ({
  icon,
  inputType,
  value,
  ...props
}) => {
  let Icon: IconType;

  switch (icon) {
    case 'email':
      Icon = require('react-icons/fa').FaEnvelope;
      break;
    case 'password':
      Icon = require('react-icons/fa').FaKey;
      break;
    default:
      throw new Error(`Unsupported input icon: ${icon}`);
  }

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        value={value}
        className="w-full pl-10 py-2 border rounded-lg border-gray-300 transition duration-300 ease-in-out focus:outline-none focus:border-gray-400 hover:border-gray-400"
        {...props}
      />
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon className="w-5 h-5 text-blue-500" />
      </span>
    </div>
  );
};

//=============================
// Brick Schema
//=============================
InputIcons.schema = {
  name: 'input-icons',
  label: 'Input with Icons',
  getDefaultProps: () => ({
    icon: 'email',
    inputType: 'text',
    value: '',
  }),
  sideEditProps: [
    {
      name: 'icon',
      label: 'Icon',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'email', label: 'Email' },
          { value: 'password', label: 'Password' },
        ],
      },
    },
    {
      name: 'inputType',
      label: 'Input Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'text', label: 'Text' },
          { value: 'password', label: 'Password' },
          { value: 'email', label: 'Email' },
        ],
      },
    },
    {
      name: 'value',
      label: 'Value',
      type: types.SideEditPropType.Text,
    },
  ],
};

export default InputIcons;
