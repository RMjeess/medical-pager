import React from "react";
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
/* import Cookies from 'universal-cookie'; */

import { ChannelListContainer } from '../component';
import { ChannelContainer } from '../component'

import 'stream-chat-react/dist/css/index.css';
import "../../styles/home.css";

const apiKey = process.env.REACT_APP_API_KEY;
const client = StreamChat.getInstance(apiKey);

export const Home = () => (
	<div className="app__wrapper">
		<Chat client={client} theme="team light">
				<ChannelListContainer 
						
				/>
				<ChannelContainer 
					
				/>
		</Chat>
	</div>
);
