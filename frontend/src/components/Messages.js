import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Messages = ({ to_id, content }) => {
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		color: theme.palette.text.secondary
	}));
	return (
		<div>
			<Box
				sx={{
					p: 2,
					display: 'grid',
					gridTemplateColumns: { md: '1fr 1fr' },
					gap: 2
				}}
			>
				<Item key={4} elevation={4}>
					<Card sx={{ minWidth: 275 }}>
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								{to_id}
							</Typography>
							<Typography variant="h5" component="div">
								{content}
							</Typography>
						</CardContent>
					</Card>
				</Item>
			</Box>
		</div>
	);
};

export default Messages;
