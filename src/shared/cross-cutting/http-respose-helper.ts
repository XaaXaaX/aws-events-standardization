export const generateSucessResponse = (data: Record<string, any>) => {
    return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
    }