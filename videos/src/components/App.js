import React from 'react';
import Searchbar from './Searchbar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube'

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onFormSubmit('universe');
    };

    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[2]
        })

    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onFormSubmit} />
                <main className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <aside className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </aside>
                    </div>
                </main>

            </div>
        );
    }
}

export default App;