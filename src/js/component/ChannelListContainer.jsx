import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';


import { FaHospital } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const SideBar = ({ logout }) => (
  <div className='channel-list__sidebar'>
      <div className='channel-list__sidebar__icon1'>
          <div className='icon1__inner'>
              <FaHospital size={30} alt='hospital'/>
          </div>
      </div>
      <div className='channel-list__sidebar__icon2'>
          <div className='icon1__inner' onClick={logout}>
              <FiLogOut size='30' alt='logout'/>
          </div>
      </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
  </div>
) 

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList 
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=> (
            <TeamChannelList 
              {...listProps}
              type='team'
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview 
              {...previewProps}
              type='team'
            />
          )
          }
        />
        <ChannelList 
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=> (
            <TeamChannelList 
              {...listProps}
              type='messaging'
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview 
              {...previewProps}
              type='messaging'
            />
          )
          }
        />
      </div>
    </>
  )
}

export default ChannelListContainer