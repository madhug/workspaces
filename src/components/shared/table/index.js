import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import './table.css';

const ico_favorite = `${process.env.PUBLIC_URL}/images/svg/ico_favorite.svg`;
const ico_unfavorite = `${process.env.PUBLIC_URL}/images/svg/ico_unfavorite.svg`;

class Table extends Component {
  
  static propTypes = {
      tableHeaders: PropTypes.arrayOf(PropTypes.string),
      workspaceData: PropTypes.arrayOf(PropTypes.object(
          PropTypes.shape: {
            uid: PropTypes.string, 
            name: PropTypes.string, 
            owner: PropTypes.string, 
            isFavorite: PropTypes.bool,
            isPublic: PropTypes.bool,
            modified: PropTypes.string
          }
      )),
      onFavorite: PropTypes.func
  }

  renderWorkspaceDetails(data) {
      const { uid, name, owner, isFavorite } = data;
      const { onFavorite } = this.props;
      return (
          <div className="details">
              <img src={isFavorite ? ico_favorite : ico_unfavorite} 
                className="icon" 
                onClick={onFavorite.bind(null, uid)}/>
              <div className="name">
                  <p className="label">{ name }</p>
                  <p className="sublabel">{ `Owner: ${owner}` }</p>
              </div>
          </div>
      ) 
  }

  renderRow(data) {
    const { uid, isPublic, modified } = data;
    return (
        <tr key={uid} className='table-rows'>
            <td>{ this.renderWorkspaceDetails(data) }</td>
            <td><p className="label">{ isPublic? 'public' : 'private' }</p></td>
            <td><p className="label">{ moment(modified).format('MM/DD/YY') }</p></td>
        </tr>
    )
  }

  render() {
    const { tableHeaders, workspaceData } = this.props;
    return (
      <div className="table-data">
        <table>
            <tr className='table-header'>
                { tableHeaders.map( h => {
                    return (
                        <th className='label'>
                            {h}
                        </th>
                    )
                }) }
            </tr>

            {
                workspaceData.map( d => {
                    return this.renderRow(d);
                })
            }

        </table>
      </div>
    );
  }
}

export default Table;
