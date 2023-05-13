import classNames from 'classnames'
import * as React from 'react'
import { Text, types } from 'react-bricks/frontend'

export interface ConversationProps {
  name: string
  imageSrc: string
  imageAlt: string
  message: string
  messageCount: number
}

const Conversation: types.Brick<ConversationProps> = ({
  name,
  imageSrc,
  imageAlt,
  message,
  messageCount,
}) => {
  return (
    <div className={classNames('relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200')}>
      <div className={classNames('flex-shrink-0')}>
        <img src={imageSrc} alt={imageAlt} className={classNames('h-10 w-10 rounded-full')} />
      </div>
      <div className={classNames('flex-1 min-w-0')}>
        <a href="#" className={classNames('focus:outline-none')}>
          <div className={classNames('flex items-center justify-between')}>
            <Text propName="name" renderBlock={(props) => (
              <p className={classNames('text-sm font-bold text-blue-500')} {...props.attributes}>{props.children}</p>
            )} placeholder="Name"/>
            <div className={classNames('text-gray-400 text-xs')}>12:33 AM</div>
          </div>
          <div className={classNames('flex items-center justify-between')}>
            <Text propName="message" renderBlock={(props) => (
              <p className={classNames('text-sm text-gray-500 truncate')} {...props.attributes}>{props.children}</p>
            )} placeholder="Message"/>
            <div className={classNames('text-white text-xs bg-blue-400 rounded-full px-1 py-0')}>
              {messageCount}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

Conversation.schema = {
  name: 'my-conversation',
  label: 'Conversation',
  getDefaultProps: () => ({
    name: 'John Doe',
    imageSrc: '/path/to/image.jpg',
    imageAlt: 'Profile Picture',
    message: 'Hello, world!',
    messageCount: 1,
  }),
  sideEditProps: [
    {
      name: 'name',
      label: 'Name',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'imageSrc',
      label: 'Image Src',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'imageAlt',
      label: 'Image Alt',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'message',
      label: 'Message',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'messageCount',
      label: 'Message Count',
      type: types.SideEditPropType.Number,
    },
  ],
}

export default Conversation
