import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/schema";
export type TDocumentType = Schema["Documents"]["type"];
export type TDocumentCreateType = Schema["Documents"]["createType"];
export type TDocumentUpdateType = Schema["Documents"]["updateType"];

const client = generateClient<Schema>({ authMode: "userPool" });

export const createDocument = async (
  data: TDocumentCreateType
): Promise<Partial<TDocumentType> | null> => {
  try {
    const response = await client.models.Documents.create(data, {
      authMode: "userPool",
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

export const getDocumentById = async (id: string): Promise<TDocumentType | null> => {
  try {
    const response = await client.models.Documents.get(
      { documentId: id },
      { authMode: "userPool" }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error fetching document with ID ${id}:`, error);
    throw error;
  }
};

export const getDocumentsByUserId = async (
  userId: string,
  limit: number = 10,
  nextToken: string | null = null
): Promise<{ items: TDocumentType[]; nextToken: string | null }> => {
  try {
    const response = await client.models.Documents.getNotesByUserId(
      { userId },
      { limit, nextToken, authMode: "userPool" }
    );
    console.log(response);
    return {
      items: response.data || [],
      nextToken: response.nextToken || null,
    };
  } catch (error) {
    console.error(`Error fetching documents for user ${userId}:`, error);
    throw error;
  }
};

export const getDocumentsBySubject = async (
  subject: string,
  limit: number = 10,
  nextToken: string | null = null
): Promise<{ items: TDocumentType[]; nextToken: string | null }> => {
  try {
    const response = await client.models.Documents.getNotesBySubject(
      { subject },
      { limit, nextToken, authMode: "userPool" }
    );
    console.log(response);
    return {
      items: response.data || [],
      nextToken: response.nextToken || null,
    };
  } catch (error) {
    console.error(`Error fetching documents for subject ${subject}:`, error);
    throw error;
  }
};

export const updateDocument = async (
  data: TDocumentUpdateType
): Promise<TDocumentType | null> => {
  try {
    const response = await client.models.Documents.update(data, {
      authMode: "userPool",
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

export const deleteDocument = async (id: string): Promise<TDocumentType | null> => {
  try {
    const response = await client.models.Documents.delete(
      { documentId: id },
      { authMode: "userPool" }
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting document with ID ${id}:`, error);
    throw error;
  }
};

export const listDocuments = async (
  filter?: any,
  limit: number = 10,
  nextToken: string | null = null
): Promise<{ items: TDocumentType[]; nextToken: string | null }> => {
  try {
    const response = await client.models.Documents.list({
      filter,
      limit,
      nextToken,
      authMode: "userPool",
    });
    return {
      items: response.data || [],
      nextToken: response.nextToken || null,
    };
  } catch (error) {
    console.error("Error listing documents:", error);
    throw error;
  }
};