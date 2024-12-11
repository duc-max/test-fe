import { Pagination, Table } from "antd";
import { TableContainer } from "./style/style";

function TableCustom() {
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1, // Adds row number
    },
    {
      title: "Mã KH",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Người tiếp thị",
      dataIndex: "marketer",
      key: "marketer",
    },
    {
      title: "Nguồn",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  // Define table data
  const data = [
    {
      key: "1",
      customerId: "EA09888765",
      name: "Nguyễn Văn A",
      phone: "0368585812",
      email: "Nguyenthithanh1209@gmail.com",
      marketer: "Nguyễn Văn B",
      source: "Website",
      note: "Gọi tư vấn ngoài giờ hành chính",
      createdAt: "06/09/2023",
    },
    {
      key: "2",
      customerId: "EA09888765",
      name: "Nguyễn Văn A",
      phone: "0368585812",
      email: "Nguyenthithanh1209@gmail.com",
      marketer: "Nguyễn Văn C",
      source: "Facebook Ads",
      note: "Gọi tư vấn ngoài giờ hành chính",
      createdAt: "06/09/2023",
    },
    {
      key: "3",
      customerId: "EA09888765",
      name: "Nguyễn Văn A",
      phone: "0368585812",
      email: "Nguyenthithanh1209@gmail.com",
      marketer: "Nguyễn Văn C",
      source: "Trực tiếp",
      note: "Gọi tư vấn ngoài giờ hành chính",
      createdAt: "06/09/2023",
    },
  ];

  return (
    <TableContainer>
      <Table columns={columns} dataSource={data} pagination={false} bordered />

      <Pagination
        defaultCurrent={1}
        total={50}
        pageSize={6}
        showSizeChanger
        pageSizeOptions={["20", "50", "100"]}
        locale={{
          items_per_page: " / trang",
          jump_to: "Đi tới",
          jump_to_confirm: "Xác nhận",
          page: "trang",
        }}
      />
    </TableContainer>
  );
}

export default TableCustom;
