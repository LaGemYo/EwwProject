export const modifyStatusBarAction = ({quantity, id}) => {
    return {
      type: 'MODIFY_STATUS_BAR',
      modifier: quantity,
      barId: id,
    }
  }
