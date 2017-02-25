import React, { Component, PropTypes } from 'react';
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
        <tr key={uid}>
            <td>{ this.renderWorkspaceDetails(data) }</td>
            <td>{ isPublic? 'public' : 'private' }</td>
            <td>{ modified }</td>
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
            <tr className='table-rows'> 
                {
                    workspaceData.map( d => {
                        return this.renderRow(d);
                    })
                }
            </tr>
        </table>
      </div>
    );
  }
}

export default Table;
