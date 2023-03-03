import React, { ReactNode } from "react"
import { render, screen } from "@testing-library/react"
import { List } from "../index"

const nameMock = "Luke"
const birthMock = "19BBY"
const genderMock = "male"

const withWrapper = (children: ReactNode) => {
  return <table><tbody>{children}</tbody></table>
}

describe("list-component-tests", () => {
  it("should be render component list", () => {
    render(withWrapper(<List name={nameMock} birth={birthMock} gender={genderMock} />))
    expect(screen.getAllByTestId).toBeTruthy()
  })
  it("should be render props name", () => {
    render(withWrapper(<List name={nameMock} birth={birthMock} gender={genderMock} />))
    expect(screen.getByText("Luke").textContent).toEqual('Luke')
  })
  it("should be render props birth", () => {
    render(withWrapper(<List name={nameMock} birth={birthMock} gender={genderMock} />))
    expect(screen.getByText("19BBY").textContent).toEqual('19BBY')
  })
  it("should be render props gender", () => {
    render(withWrapper(<List name={nameMock} birth={birthMock} gender={genderMock} />))
    expect(screen.getByText("male").textContent).toEqual('male')
  })
})