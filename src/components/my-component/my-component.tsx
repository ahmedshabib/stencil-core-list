import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { headers, rows } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() rows: any = rows;

  /**
   * The middle name
   */
  @Prop() headers: any = headers;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() todoCompleted: EventEmitter<any>;

  sort(header:any){
    console.log(header);
    console.log("HEllo");
  }

  render() {
    return <div>
      <table class="table-striped">
        <thead>
        <tr>
          <th>Actions</th>
          {
            this.headers.map((header) =>
              <th onClick={() => this.sort(header)}>{header.name}</th>,
            )
          }
        </tr>
        </thead>
        <tbody>
        {
          this.rows.map((row) =>
            <tr>
              <td>
                <button>Edit</button>
                <button>Manage</button>
                <button>Delete</button>
              </td>
              {
                this.headers.map((header) =>
                  <td>{row[header.full_key]}</td>,
                )
              }
            </tr>,
          )
        }
        </tbody>
      </table>
    </div>;
  }
}
