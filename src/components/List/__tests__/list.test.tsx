import React, { ReactNode } from "react"
import { render } from "@testing-library/react"
import { List } from "../index"

const nameMock = "Luke"
const birthMock = "19BBY"
const genderMock = "male"

const withWrapper = (children: ReactNode) => {
  return <table><tbody>{children}</tbody></table>
}

describe("list-component-tests", () => {
  it("should be render component list", () => {
    const { getAllByTestId } = render(withWrapper(<List name={nameMock} birth={birthMock} gender={genderMock} />))
    expect(getAllByTestId).toBeTruthy()
  })
})